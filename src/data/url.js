/*я прекрасно понимаю, что так адекватные люди не делают и что следует сделать url сквозным, а не собирать его как франкейнштейна,
* но, когда я об этом вспомнила, было уже поздно переделывать*/

export function makeUrl (CategoryName = 'Architecture', startIndex = 0){
    const key = "AIzaSyAlIeGyOujclVGHf35-htRC99WUBGNh7Ak"
    let url = `https://www.googleapis.com/books/v1/volumes?q="subject:${CategoryName}"&key=${key}&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`
    return url;
}
