export default function () {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen relative">
        {/* 背景 */}
        <div className="flex flex-row items-center justify-center absolute inset-0 z-0">
          {/* 左の部分 */}
          <div className="flex flex-col items-center justify-center w-2/5 h-full bg-teal-500 relative z-0">
            {/* 右上のアイコン */}
            <div className="flex flex-row items-center justify-start p-4 absolute left-0 top-0 z-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <span className="text-center text-lg font-normal text-white">diorela</span>
            </div>

            {/* 中央の部分 */}
            <div className="flex flex-col items-center z-10 space-y-10">
              {/* ようこそ */}
              <p className="text-center text-6xl font-bold text-white">
                Welcome Back!
              </p>

              {/* テキスト */}
              <div className="justify-center">
                <p className="text-center text-2xl font-normal text-white">
                  To keep connected with us please
                </p>
                <p className="text-center text-2xl font-normal text-white">
                  login with your personal info
                </p>
              </div>

              {/* ボタンの部分 */}
              <button className="text-center py-4 px-20 rounded-4xl border-2 border-white text-white">
                SIGN IN
              </button>
            </div>
          </div>
          {/* 右の部分 */}
          <div className="flex flex-col items-center justify-center w-3/5 h-full bg-white relative z-0">
            {/* 中央の部分 */}
            <div className="flex flex-col items-center space-y-10 z-10">

              <p className="text-center text-5xl font-bold text-teal-500">
                Create Account
              </p>

              <p className="text-center text-lg font-normal text-gray-300">
                or use your email for registration:
              </p>

              {/* インプット部分 */}
              <div className="flex flex-col items-center space-y-3">

                {/* Nameインプット */}
                <div className="flex flex-row items-center justify-center bg-gray-100 py-4 px-10 space-x-2">
                  {/* アイコン */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                  {/* テキストフィールド */}
                  <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    className="border-0 w-88 focus:outline-none focus:ring-0"
                  />
                </div>

                {/* Eamilインプット */}
                <div className="flex flex-row items-center justify-center bg-gray-100 py-4 px-10 space-x-2">
                  {/* アイコン */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>

                  {/* テキストフィールド */}
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="border-0 w-88 focus:outline-none focus:ring-0"
                  />
                </div>

                {/* Passwordインプット */}
                <div className="flex flex-row items-center justify-center bg-gray-100 py-4 px-10 space-x-2">
                  {/* アイコン */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>

                  {/* テキストフィールド */}
                  <input
                    type="password"
                    name="Name"
                    placeholder="Password"
                    className="border-0 w-88 focus:outline-none focus:ring-0"
                  />
                </div>
              </div>

              <button className="py-4 px-20 rounded-4xl bg-teal-500 text-white">SIGN UP</button>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}