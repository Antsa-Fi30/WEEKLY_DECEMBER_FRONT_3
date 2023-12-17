class Carousel {
  /**
   *
   * @param {HTMLElement} element
   * @param {Object} options
   * @param {Object} options.slidesToScroll Nombre d'elements à défiler
   * @param {Object} options.slidesVisible Nombre d'elements visible dans un slide
   * @param {boolean} options.infiniteScroll Indique si le carrousel doit défiler en boucle
   */

  constructor(element, options = {}) {
    this.element = element;
    this.options = Object.assign(
      {},
      {
        slidesToScroll: 1,
        slidesVisible: 1,
      },
      options
    );

    let children = [].slice.call(element.children);
    this.currentItem = 0;
    this.root = this.createDivWithClass("carousel");
    this.container = this.createDivWithClass("container_carousel");
    this.root.appendChild(this.container);
    this.element.appendChild(this.root);
    this.items = children.map((child) => {
      let item = this.createDivWithClass("carousel_item");
      item.appendChild(child);
      this.container.appendChild(item);
      return item;
    });

    this.setStyle();
    this.startAutoSlide();
  }

  /**
   * @param {string} className
   * @returns {HTMLElement}
   */

  createDivWithClass(className) {
    let div = document.createElement("div");
    div.setAttribute("class", className);
    return div;
  }

  /**
   * Bonnes dimensions des carousels
   */

  setStyle() {
    let ratio = this.items.length / this.options.slidesVisible;
    this.container.style.width = ratio * 100 + "%";
    this.items.forEach(
      (item) =>
        (item.style.width = 100 / this.options.slidesVisible / ratio + "%")
    );
  }

  /**
   * Pour animer le slide des Carousels
   */

  /**
   * Démarre l'animation automatique du carrousel
   */
  startAutoSlide() {
    const interval = 3000; // 3 secondes
    this.timer = setInterval(() => {
      this.slideTo(this.currentItem + this.options.slidesToScroll);
    }, interval);
  }

  /**
   * Défile le carrousel vers un élément spécifique
   * @param {number} index - L'index de l'élément cible
   */
  slideTo(index) {
    if (index >= this.items.length) {
      index = 0;
    }

    const lastIndex = this.items.length - this.options.slidesVisible;
    index = Math.max(0, Math.min(index, lastIndex));
    this.currentItem = index;
    const translateX = (-1 * this.currentItem * 100) / this.items.length;
    this.container.style.transform = `translateX(${translateX}%)`;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  new Carousel(document.querySelector("#carousel1"), {
    slidesToScroll: 3,
    slidesVisible: 3,
  });
});
