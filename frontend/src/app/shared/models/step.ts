const imgPath = "assets/img/how-it-works/";

export class Step {
  title: string;
  imgSrc: string;
  description: string;
  extras: string = null;
  maxHeight: string;

  constructor(title: string, imgName: string, desc: string, maxHeight: string, extras?: string) {
    this.title = title;
    this.imgSrc = imgPath + imgName;
    this.description = desc;
    this.maxHeight = maxHeight;
    if (extras) {
      this.extras = extras;
    }
  }
}
