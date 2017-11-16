import { observable } from 'mobx'
import { Likemark } from './Likemark'

export class LikemarkStore {
  @observable likemarks = []

  addLikemark () {
    const counter = this.likemarks.length
    const likemark = new Likemark('Test', 'Likemark ' + counter)

    this.likemarks.push(likemark)
  }
}
