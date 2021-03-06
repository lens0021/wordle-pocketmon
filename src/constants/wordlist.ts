import { disassemble } from 'hangul-js'

const replaceMap: { [key: string]: string } = {
  ㄲ: 'ㄱㄱ',
  ㄸ: 'ㄷㄷ',
  ㅃ: 'ㅂㅂ',
  ㅆ: 'ㅅㅅ',
  ㅉ: 'ㅈㅈ',
  ㅒ: 'ㅑㅣ',
  ㅖ: 'ㅕㅣ',
}

export const disassembledWords = (words: string[]): string[] => {
  return words.map((word) => {
    word = disassemble(word).join('')
    for (let replace in replaceMap) {
      word = word.replaceAll(replace, replaceMap[replace])
    }
    return word
  })
}
export const WORDS = disassembledWords(
  `
가디
나무킹
베베놈
슈륙챙이
무스틈니
눈쓰개
니드리나
고릴타
니드리노
독파리
두빅굴
더시마사리
타타륜
랜턴
악비르
탕구리
철시드
흥나숭
마그마번
빈티나
텅구리
윽우지
체리버
라티오스
왕자리
야부엉
꼬모카
썬더라이
프로토가
미끄메라
치렁
침바루
마디네
툰베어
에브이
사철록
크랩
래비풋
어둠대신
해무기
야도뇽
스콜피
제라오라
수레기
글라이거
캐스퐁
레지아이스
냐오히트
귀뚤톡크
골루그
다크펫
요테리
파크로우
루차불
닥트리오
호바귀
멜메탈
진주몽
배쓰나이
랑딸랑
음번
샤비
비구술
물거미
발챙이
우르
식스테일
클레피
캐터피
시라소몬
어니부기
두개도스
레오꼬
꾸꾸리
조로아
노고치
에레키드
카푸꼬꼬꼭
고래왕
야도킹
엠페르트
리자몽
스왈로
다꼬리
이어롤
오롱털
또르박쥐
네이티
러브로스
미끄네일
엘레이드
빙큐보
대여르
파이어로
앤테이
엘풍
누리레느
유니란
전수목
슬리퍼
드라꼰
영치코
아케오스
자망칼
다크라이
스컹탱크
볼비트
누니머기
랜드로스
테오키스
골뱃
노보청
루나톤
메깅
겟핸보숭
모래두지
눈여아
님피아
주뱃
나시
우라오스
게을킹
대코파스
블리자포스
토게키스
푸린
깨물부기
일레도리자드
악비아르
킹드라
마그카르고
페로코체
두파팡
카푸나비나
수리둥보
대굴레오
데스판
쥬쥬
깝질무
지라치
메타몽
내루미
델빌
에레키블
레트라
꼬부기
갈가부기
레어코일
돌살이
개굴반장
펜드라
딜리버드
플라엣테
전룡
야나키
불켜미
삐삐
핫삼
픽시
프리져
바리톱스
폭슬라이
맘복치
냐스퍼
베이리프
아이스크
탄차곤
코일
마릴리
으랏차
쉘곤
에이스번
백솜모카
이올브
아고용
롱스톤
메테노
총어
채키몽
그랑블루
플라베베
마빌크
디안시
에레브
딱충이
꼬지보리
깜까미
인텔리레온
샤프니아
랄토스
뮤츠
앗차프
데스니칸
게을로
영구스
곤율거니
볼트로스
깨봉이
보르그
스트린더
뷰티플라이
켄호로우
마그비
나목령
샤크니아
고오스
워글
훔처우
비브라바
듀란
윤겔라
염버니
파비코
나옹
쪼마리
부우부
코코리
펄기아
쏘드라
체리꼬
유크시
후파
파라섹트
렌트라
키요공
바닐프티
꼬렛
쥬레곤
에써르
무장조
미라몽
가이오가
에몽가
그라에나
발바로
빼미스로우
아마루스
마크탕
크라파
팬텀
동챙이
탐리스
실쿤
솜솜코
고디보미
달무리나
성원숭
뿔카노
루카리오
몽나
찌르꼬
구구
흉내내
유토브
릴리요
버섯꼬
모스노우
펄스멍
노공룡
셀러
전지충이
페르시온
아르세우스
안농
이상해꽃
야나프
액슨도
신뇽
코고미
쌍검자비
철화구야
강철톤
모래성이당
거북왕
버터플
루가루암
가보리
플러시
꼬링크
악식킹
딥상어동
야느와르몽
루기아
프레프티르
비나방
레시라무
둥실라이드
태우지네
밤선인
토게데마루
버드렉스
마셰이드
파치리스
팽도리
찌르버드
마그마
밀탱크
암팰리스
물짱이
아보
어래곤
턱지충이
바오키
끼리동
디그다
라티아스
꼬시레
비버통
네오비트
치코리타
보송송
멜리시
니드킹
산호르곤
레이스포스
코스모움
우츠보트
레돔벌레
단지래플
액스라이즈
피그킹
춤추새
창파나이트
메이클
누리공
모노두
뽀록나
모르페코
디아루가
알통몬
단단지
눈설왕
다탱구
아말도
조로아크
칼라마네로
푸호꼬
드래피온
레지기가스
울머기
로토무
쌔비냥
토중몬
시라칸
쁘사이저
프리지오
화강돌
무우마
도토링
드래런치
찌로꼬치
삐
레쿠쟈
고지
하랑우탄
하리뭉
스라크
스완나
비조도
망키
에이팜
캥카
어흥염
보만다
테르나
마기라스
왕큰부리
배루키
킹크랩
이븐곰
아그놈
꿀꺽몬
별가사리
제크로무
껍질몬
깨비물거미
독케일
메롱꿍
불비달마
갈모매
모부기
미끄래곤
코터스
파쪼옥
세레비
포트데스
찌르성게
크레세리아
또가스
거북손손
윈디
바라철록
단데기
파르토
골덕
피그점프
파르셀
리오르
수풀부기
케르디오
칠색조
티고라스
토대부기
형광어
부란다
짜랑고우거
단굴
레지드래고
슈쁘
쥬피썬더
브리무음
너트령
폭타
저리더프
나옹마
피죤
모아머
토게피
페이검
몸지브림
테일로
아보크
두코
키링키
멍파치
깨비드릴조
리자드
솔록
암나이트
드레디어
고라파덕
지가르데
푸푸린
소곤룡
개굴닌자
꼬리선
자시안
블레이범
버랜지나
돌헨진
투구뿌논
잎새코
버프론
브이젤
바랜드
뮤
암스타
쌍검킬
브리가론
레지에레키
대왕끼리동
덩쿠림보
만타인
톱치
글레이시아
리그레
둔타
애프룡
찌르호크
테라키온
늪짱이
피오네
라플레시아
아켄
만마드
두두
탱그릴
아르코
갱도라
샹델라
해피너스
타입널
무한다이노
레디안
사랑동이
터검니
배바닐라
염무왕
나이킹
럭시오
냄새꼬
플라이곤
코뿌리
치릴리
해골몽
이상해풀
토게틱
에리본
딱구리
포푸니
차곡차곡
바오프
던지미
통통코
플라제스
비비용
전툴라
할비롱
투구푸스
쟝고
카푸브루루
플로젤
오뚝군
데스마스
제브라이카
마이농
대쓰여너
파오리
파치르돈
아머까오
때때무노
기기기어르
파비코리
핑복
마그마그
히포포타스
피츄
하데리어
애버라스
약어리
네크로즈마
눈꼬마
란쿨루스
두루지벌레
메가니움
리피아
썬더
내던숭이
초염몽
보르쥐
레지스틸
먹고자
불꽃숭이
피카츄
차오꿀
포푸니라
질뻐기
깜눈크
판짱
니드퀸
슈바르고
뚜벅쵸
실버디
솔가레오
아라리
델케티
달콤아
포푸니크
데기라스
마휘핑
후딘
메탕
파이숭이
비크티니
고디탱
라란티스
크레베이스
머드나기
석탄산
모래꿍
쏘겨모
마샤도
텅비드
카푸느지느
이벨타르
활화르바
콘치
비조푸
헌테일
깜놀버슬
어지리더
번치코
다부니
모다피
아공이
손지브림
덩쿠리
켄타로스
사다이사
킬리아
짜랑고우
파이어
벰크
하마돈
더스트나
램프라
다태우지네
제르네아스
두르쿤
짜랑랑
요씽리스
쏘콘
포니타
무우마직
삼삼드래
야돈
두까비
아마루르가
꼴깍몬
루리리
늑골라
마라카치
골비람
씨레오
음뱃
펌킨인
루주라
선인왕
왕콘치
배우르
목도리키텔
한카리아스
아이앤트
트로피우스
스이쿤
요가램
또도가스
파이리
데구리
파라스
개구마르
파라꼬
앱솔
이어롭
왕구리
몽얌나
폭음룡
한바이트
글라이온
탄동
내룸벨트
트리미앙
니드런
모단단게
모크나이퍼
지그제구리
브케인
질퍽이
케오퍼스
망나뇽
화염레오
보스로라
대검귀
치고마
샤미드
토네로스
럭키
릴링
몰드류
꼬지지
두더류
요가랑
폴리곤
페라페
독침붕
분이벌레
타만타
루브도
킬가르도
괴력몬
나루림
불화살빈
라이코
분떠도리
수댕이
자포코일
메리프
코스모그
도치보구
나룸퍼프
기가이어스
해너츠
라프라스
포챠나
꼬마돌
달코퀸
저리어
소미안
입치트
메꾸리
로토스
네오라이트
헤라크로스
크로뱃
두랄루돈
노라키
대로트
대짱이
형사구스
램펄드
화살꼬빈
쉐이미
해루미
세꿀버리
누오
저리릴
마임맨
가디안
로파파
도나리
나인테일
잉어킹
거북손데스
대포무노
블로스터
코바르온
자마슈
에나비
날쌩마
짜랑꼬
메가자리
개무소
블루
트리토돈
치갈기
갸라도스
깜지곰
단칼빙
드래펄트
샤로다
큐레무
두르보
자마젠타
두트리오
루나아라
뚜꾸리
치라치노
카스쿤
헬가
씨카이저
뿔충이
콕코구리
줄뮤마
라이츄
프테라
이상해씨
마그케인
켈리몬
스컹뿡
니로우
장크로다일
메더
얼음귀신
오케이징
메탕구
과사삭벌레
마폭시
로즈레이드
점토도리
캐이시
왕눈해
멜탄
얼루기
흔들풍손
달막화
완철포
바닐리치
메로엣타
네이티오
크리만
블래키
엠라이트
코산호
모래뱀
방패톱스
분홍장이
카포에라
그란돈
깨비참
코코파스
콘팡
가재군
버섯모
비리디온
딱정곤
꼬지모
마릴
자루도
강챙이
디헤드
비퀸
몬냥이
세비퍼
거대코뿌리
아노딥스
염뉴트
아리아도스
투구
도롱마담
고디모아젤
어치르돈
부스터
곤율랭
종이신도
냐오닉스
마임꽁꽁
견고라스
나무돌이
뽀뽀라
초라기
근육몬
타격귀
찌리리공
레지락
비버니
불카모스
데인차
가재장군
우파
마자
신비록
절각참
휠구
앗차키
홍수몬
토쇠골
붐볼
벌차이
누겔레온
직구리
매시붕
나몰빼미
기어르
자말라
파르빗
드래캄
고고트
피죤투
야도란
치라미
로젤리아
기라티나
일레즌
탱탱겔
리아코
링곰
포곰곰
따라큐
마나피
암멍이
썬더볼트
데덴네
폭거북스
냐오불
마기아나
레파르다스
나무지기
동탁군
콩둘기
도치마론
슬리프
고우스트
에블리
시마사리
갑주무사
동미러
연꽃몬
아쿠스타
밀로틱
맘박쥐
게노세크트
고래왕자
큐아링
푸크린
이브이
코리갑
꼬몽울
사마자르
가로막구리
꽁어름
잠만보
히드런
삐딱구리
꼬치조
볼케니온
마자용
다투곰
레디바
심보러
도롱충이
기기어르
돈크로우
맘모꾸리
팽태자
나메일
아차모
엘리게이
주리비얀
메타그로스
파치래곤
앤티골
우츠동
독개굴
귀뚤뚜기
미꾸리
패리퍼
미뇽
장침바루
암트르
시드라
피콘
오기지게
`
    .trim()
    .split('\n')
)
