import Head from "next/head";
import SWRegister from "../sw-register";
import "./style.css"

const sx = {
  container:{
    maxWidth: "900px",
    margin: "auto",
    boxShadow: "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
    backgroundColor: "#fff",
    paddingBottom: "24px"
  },
  title:{
    textAlign: "right",
    fontSize: "25px",
    fontFamily: "serif"
  },
  header:{
    objectFit: "cover"
  },
  voiceGroup:{
    display: "flex",
    flexWrap: "wrap",
    margin: "6px 12px"
  },
  description:{
    margin: "6px 32px"
  },
  voice:{
    margin: "6px",
    flex: "1 1 auto",
    display: "inline-flex",
    cursor: "pointer",
    color: "white",
    borderRadius: "10px",
    padding: "12px 20px 12px 32px",
    backgroundColor: "#faa65f",
    borderLeft: "12px solid #FCDFA1",
    boxShadow: "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
  }
}

const voices = [
  "FPSは遊びじゃないんだよ！",
  "しばしまたれいっ！",
  "そのDVDうちにあるよ？",
  "だめだめだめだめ",
  "ねぇ、たすからないで！？",
  "ネットに写真をアップロードするのは十分気をつけたほうがいい",
  "ネットは怖いんですよ〜？",
  "のあに賄賂はきかないよ！？",
  "やっちゃった〜",
  "やっていこう！",
  "ゆるさないんだからね！",
  "下心あれば水心",
  "何？通分って？？",
  "死は救済です。",
  "消費税込みはだめだよなぁ？",
  "他の女の匂いがする",
  "脳みそと直結してんのかぁ？",
  "分かんないとき指当てない？普通",
  "来ちゃった♡"
]

function IndexPage() {
  return (
    <>
      <Head>
        <title>noavoice - presented by 望月のあ</title>
        <link rel="manifest" href="/static/manifest.json" />
      </Head>
      <main style={sx.container}>
      <img src="/static/header.png" alt="header" height="150px" width="100%" style={sx.header}/>
      <div style={sx.description}>
      
        <small>
        <a href="https://twitter.com/_noach" style={sx.descriptionButton}>声：望月のあ @_noach</a><br/>
          <a rel="noreferrer noopener" target="_blank" href="https://github.com/hrdtbs/noavoice#%E9%9F%B3%E5%A3%B0%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AElicence%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6">
          音声ファイルのライセンスについて</a></small>

      </div>
      <div style={sx.voiceGroup}>
      {voices.map((voice, i) => {
          return (
            <figure style={sx.voice} key={`voice-${i}`} onClick={e => {
              e.currentTarget.children[1].play()
            }}>
                <figcaption>
                  {voice}</figcaption>
                <audio
                    src={`/static/voices/${voice}.mp4`}>
                </audio>
            </figure>
          )
        })}
      </div>
      </main>

      
      <SWRegister />
    </>
  );
}

export default IndexPage;