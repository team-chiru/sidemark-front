/* @flow */

export type Likemark = {
  id: number,
  title: string,
  url: string,
  parentId: number,
  children: Array<Likemark>
}
