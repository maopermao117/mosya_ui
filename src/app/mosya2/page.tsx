export default function () {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen h-full relative">
        {/* ヘッダー */}
        <header className="flex flex-row items-center justify-between w-full absolute top-0 z-10">
          {/* 左の部分 */}
          <div className="flex flex-row items-center justify-center space-x-2">
            {/* ロゴは無理だから諦め */}
            <p className="text-center text-2xl font-bold text-gray-800">
              SITTE
            </p>

            <p className="text-center text-base font-bold text-gray-800">
              デジタル名刺、シッテる？
            </p>
          </div>

          {/* 右の部分 */}
          <div className="flex flex-row items-center justify-center space-x-2">
            {/* サインイン */}
            <button className="text-gray-800 font-semibold py-2 px-4 hover:bg-gray-300">
              サインイン
            </button>

            {/* 新規登録 */}
            <button className="text-white font-semibold bg-gray-900 py-2 px-4 hover:bg-gray-700">無料ではじめる</button>


            {/* ハンバーガー */}
            <button className="p-2 hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>




          </div>
        </header>
        {/* メインコンテンツ */}
        <div className="flex flex-col items-center absolute inset-0 z-0 bg-gray-50">
          {/* LPの１枚目 */}
          <div className="flex flex-col items-center w-full h-120 relative">
            {/* 背景指定 */}
            <svg
              className="w-full h-full absolute inset-0 z-0"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="20,0 100,0 100,100 50,100" fill="#facc15" />
            </svg>

            
            {/* コンテンツ */}
            <div className="flex flex-row justify-start w-full absolute inset-0 z-10">
              {/* 左側 */}
              <div className="flex flex-col items-end justify-center w-full z-10">
                <div className="flex flex-col items-start space-y-4">
                  <p className="text-center font-bold text-gray-800">
                    <span className="bg-white text-5xl">デジタル名刺</span>
                    <span className="text-3xl">が、</span>
                  </p>
                  <div className="flex flex-row items-end justify-center text-center font-bold text-gray-800">
                    <p className="bg-white">
                      <span className="text-5xl">あなた</span>
                      <span className="text-3xl">との</span>
                      <span className="text-5xl">出会い</span>
                    </p>
                    <span className="text-3xl">を</span>
                  </div>
                  <p className="text-center font-bold">
                    <span className="text-5xl bg-white">印象的</span>
                    <span className="text-3xl">に</span>
                  </p>

                  <div className="flex flex-col items-start font-bold">
                    <p>わたしを、あなたを、シッテつながる。</p>
                    <p>SITTEで、新たなコミュニケーション。</p>
                    <div className="flex flex-col items-start">
                      <p>デジタル名刺は、<span className="bg-amber-200">オンライン・オフライン問わず</span>、</p>
                      <p>様々な場面での<span className="bg-amber-200">「はじめまして」を印象的なものに</span>する、</p>
                      <p>新しい<span className="bg-amber-200">自己紹介ツール</span>です。</p>
                    </div>

                  </div>
                </div>
              </div>

              {/* 右側 */}
              <div className="flex flex-col items-center w-full">

              </div>
            </div>
          </div>



          {/* LPの２枚名 */}
          <div className="flex flex-col items-center w-full h-140 relative">
            <div className="flex flex-col items-center absolute inset-0 z-0 bg-white">
              
            </div>
          </div>



          <footer></footer>
        </div>
      </div>
    </>
  );
}