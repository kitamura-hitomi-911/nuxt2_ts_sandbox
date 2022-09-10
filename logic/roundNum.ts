/**
 * 丸数字を数字に変換
 */
type RoundNumUnicodeData = {
  roundNum: string
  unicode: string
  num: number
}
const roundNums =
  '①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳㉑㉒㉓㉔㉕㉖㉗㉘㉙㉚㉛㉜㉝㉞㉟㊱㊲㊳㊴㊵㊶㊷㊸㊹㊺㊻㊼㊽㊾㊿'.split('')
const RoundNumUnicodeList: RoundNumUnicodeData[] = roundNums.map((roundNum, idx) => ({
  roundNum: roundNum,
  unicode: roundNum.charCodeAt(0).toString(16),
  num: idx + 1,
}))
const numByRoundNum = RoundNumUnicodeList.reduce<{
  [roundNum in string]: number
}>((ret, roundNumUnicodeToNumber) => {
  ret[roundNumUnicodeToNumber.roundNum] = roundNumUnicodeToNumber.num
  return ret
}, {})
export const roundNumReg = new RegExp(
  RoundNumUnicodeList.map<string>(
    (roundNumUnicodeToNumber) => '\\u{' + roundNumUnicodeToNumber.unicode + '}'
  ).join('|'),
  'ug'
)
export const roundNumToNum = ({
  tgtStr,
  replaceFunc,
}: {
  tgtStr: string
  replaceFunc?: (num: number) => string
}) => {
  return tgtStr.replace(roundNumReg, (match: string) => {
    const replaced = numByRoundNum[match]
    return replaced ? (replaceFunc ? replaceFunc(replaced) : String(replaced)) : ''
  })
}
