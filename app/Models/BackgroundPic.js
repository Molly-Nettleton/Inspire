export class BackgroundPic {

  constructor(data) {
    this.url = data.url
    this.imgUrl = data.imgUrl
    this.largeImgUrl = data.largeImgUrl || data.url
    this.tags = data.tags
    this.author = data.author
    this.query = data.query
  }

  
}