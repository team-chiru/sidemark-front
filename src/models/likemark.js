/* @flow */

export type Likemark = {
  id: number,
  name: string,
  url: string,
  parentId: number,
  children: Array<Likemark>
}
