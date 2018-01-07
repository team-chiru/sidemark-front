/* @flow */

class Utils {
  checkPrefix (url: string): any {
    return url.match(/http:\/\//g) || url.match(/https:\/\//g)
  }

  iconGeneratorByURL (url: string): string {
    return 'https://www.google.com/s2/favicons?domain=' + url
  }
}

export const utils = new Utils()
