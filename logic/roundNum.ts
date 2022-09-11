const roundNums =
  '①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳㉑㉒㉓㉔㉕㉖㉗㉘㉙㉚㉛㉜㉝㉞㉟㊱㊲㊳㊴㊵㊶㊷㊸㊹㊺㊻㊼㊽㊾㊿'.split('')
const roundNumReg = new RegExp(roundNums.join('|'), 'g')
/**
 * 丸数字を数字に変換して返す
 * @param tgtStr 変換元の文字列
 * @param [replaceFunc] 変換後の数字に対して変換処理をかけて返す関数
 * @returns
 */
export const roundNumToNum = ({
  tgtStr,
  replaceFunc,
}: {
  tgtStr: string
  replaceFunc?: (num: number) => string
}) => {
  return tgtStr.replace(roundNumReg, (match: string) => {
    const replaced = roundNums.indexOf(match)
    return replaced > -1 ? (replaceFunc ? replaceFunc(replaced + 1) : String(replaced + 1)) : ''
  })
}
