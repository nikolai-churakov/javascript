'use strict';

const gallery = {
    settings: {
        previewSelector: '.mySuperGallery',
        openedImageWrapperClass: 'galleryWrapper',
        openedImageClass: 'galleryWrapper__image',
        openedImageScreenClass: 'galleryWrapper__screen',
        openedImageCloseBtnClass: 'galleryWrapper__close',
        openedImageCloseBtnSrc: 'img/close.jpg',


        galleryBtnElementClass: 'galleryBtn',
        rightBtnImage: 'img/arrow-right.png',
        leftBtnImage: 'img/arrow-left.png',
        ImageSrc: [],
        maxImageSrc: null,
        emptyImageSrc: 'img/max/emptyImage.png'
    },

    init(userSetting = {}) {
        Object.assign(this.settings, userSetting);

        document
            .querySelector(this.settings.previewSelector)
            .addEventListener('click', event => this.containerClickHandler(event));

        this.arrayConstraction();
    },

    containerClickHandler(event) {
        if (event.target.tagName !== 'IMG') {
            return
        }
        // Открывает картинку с полученным из целевого тега (data-full+image_url аттрибутом).
        this.openImage(event.target.dataset.full_img_url);

        //     img.onload = () => this.openImage(event.target.dataset.full_img_url);
        //     img.onerror = () => this.openImage(event.settings.emptyImageSrc);
        //    img.src = event.target.dataset.full_img_url;
    },

    openImage(src) {
        if (src !== undefined) {
            this.getScreenContainer().querySelector(`.${this.settings.openedImageClass}`).src = src;
            this.settings.maxImageSrc = src;
        } else {
            this.getScreenContainer().querySelector(`.${this.settings.openedImageClass}`).src = this.settings.emptyImageSrc;
            this.settings.maxImageSrc = gallery.settings.emptyImageSrc;
        }
    },

    getScreenContainer() {
        const galleryWrapperElement = document.querySelector(`.${this.settings.openedImageWrapperClass}`);

        if (galleryWrapperElement) {
            return galleryWrapperElement
        }

        return this.createScreenContainer();
    },

    createScreenContainer() {
        const galleryWrapperElement = document.createElement('div');
        galleryWrapperElement.classList.add(this.settings.openedImageWrapperClass);

        const galleryScreensElement = document.createElement('div');
        galleryScreensElement.classList.add(this.settings.openedImageScreenClass);
        galleryWrapperElement.appendChild(galleryScreensElement);

        const closeImageElement = new Image();
        closeImageElement.classList.add(this.settings.openedImageCloseBtnClass);
        closeImageElement.src = this.settings.openedImageCloseBtnSrc;
        closeImageElement.addEventListener('click', () => this.close());
        galleryWrapperElement.appendChild(closeImageElement);

        const image = new Image();
        image.classList.add(this.settings.openedImageClass);
        galleryWrapperElement.appendChild(image);

        const galleryBtnElement = document.createElement('div');
        galleryBtnElement.classList.add(this.settings.galleryBtnElementClass);
        galleryBtnElement.addEventListener('click', (event) => this.arrowClick(event));
        galleryWrapperElement.appendChild(galleryBtnElement);

        const leftBtn = new Image();
        leftBtn.src = this.settings.leftBtnImage;
        leftBtn.dataset.direction = 'left';
        galleryBtnElement.appendChild(leftBtn);

        const rightBtn = new Image();
        rightBtn.src = this.settings.rightBtnImage;
        rightBtn.dataset.direction = 'right';
        galleryBtnElement.appendChild(rightBtn);

        document.body.appendChild(galleryWrapperElement);
        return galleryWrapperElement;
    },

    close() {
        let el = document.querySelector(`.${this.settings.openedImageWrapperClass}`);
        if (el) {
            el.remove();
        }
    },


    arrowClick(event) {
        if (event.target.tagName !== 'IMG') {
            return
        }
        this.switchImg(event);
    },

    switchImg(event) {
        if (event.target.dataset.direction === 'left') {
            this.switchImgLeft();
        } else this.switchImgRight();
    },

    switchImgLeft() {
        let currentNumImage = this.settings.ImageSrc.indexOf(this.settings.maxImageSrc);
        let newNumImage = currentNumImage - 1;
        if (newNumImage >= 0) {
            this.settings.maxImageSrc = this.settings.ImageSrc[newNumImage];
        } else {
            this.settings.maxImageSrc = this.settings.ImageSrc[this.settings.ImageSrc.length - 1];
        }
        this.getScreenContainer()
            .querySelector(`.${this.settings.openedImageClass}`).src = this.settings.maxImageSrc;
    },

    switchImgRight() {
        const currentNumImage = this.settings.ImageSrc.indexOf(this.settings.maxImageSrc);
        const newNumImage = currentNumImage + 1;

        if (newNumImage <= this.settings.ImageSrc.length - 1) {
            this.settings.maxImageSrc = this.settings.ImageSrc[newNumImage];
        } else {
            this.settings.maxImageSrc = this.settings.ImageSrc[0];
        }
        this.getScreenContainer()
            .querySelector(`.${this.settings.openedImageClass}`).src = this.settings.maxImageSrc;
    },

    arrayConstraction() {
        const divEl = document.querySelector(this.settings.previewSelector);
        const ArrayOfImg = divEl.querySelectorAll('img');
        for (let elem of ArrayOfImg) {

            if (elem.dataset.full_img_url !== undefined) {
                this.settings.ImageSrc.push(elem.dataset.full_img_url);
            } else {
                this.settings.ImageSrc.push(this.settings.emptyImageSrc);
            }
        }
    },
}

document.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowRight' || event.code === 'KeyD' || event.code === 'Space') {
        gallery.switchImgRight();
    }
    if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
        gallery.switchImgLeft();
    }
    if (event.code === 'Escape') {
        gallery.close();
    }
})