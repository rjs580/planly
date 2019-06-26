const imgPath = "assets/img/pricing/";

export class ProductDetail {
  imgSrc: string;
  title: string;
  description: string;

  constructor(title: string, imgName: string, desc: string) {
    this.title = title;
    this.imgSrc = imgPath + imgName;
    this.description = desc;
  }
}
