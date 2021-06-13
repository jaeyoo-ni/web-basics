## 📌기말 프로젝트 요약
### 1. 라이브러리 사용

   핀터레스트와 같은 masonry 레이아웃을 구현하기 위해 masonry.js 라이브러리를 사용하였습니다.
   (https://masonry.desandro.com/)
   
  <br><br>![핀터레스트 배열](https://user-images.githubusercontent.com/79969817/121802793-483d0600-cc79-11eb-9ea5-b2fd024ef5aa.gif)<br><br>

### 2. 햄버거 메뉴 구현

   이케아 로고 이미지 왼편에 있는 햄버거 메뉴 버튼을 누르면 사이드바가 나오도록 js로 구현했습니다.
   
   <br><br>![햄버거 사이드바](https://user-images.githubusercontent.com/79969817/121802813-5c810300-cc79-11eb-8153-bad13cb51f56.gif)<br><br>

### 3. 검색창 이벤트

   검색창을 클릭했을 때 기존 이케아 사이트와 같이 모달창 형식으로 나타냈습니다.
   클릭시 search-icon이 close-icon으로 바뀌며, 테두리가 파란색으로 바뀌고, 검색창 하단부에
   검색 기록이 나오는 것 같이 보이도록 하였습니다.
   
   <br><br>![검색창](https://user-images.githubusercontent.com/79969817/121802839-7d495880-cc79-11eb-825f-4d61dd656039.gif)<br><br>


### 4. scrollToTop 버튼

   사용자가 스크롤할 때 절반 정도의 위치에서 scrollToTop 버튼이 나타나도록하여 사용자가
   쉽게 사이트 상단으로 이동할 수 있도록 구현했습니다.
   
   <br><br>![스크롤 투 탑2](https://user-images.githubusercontent.com/79969817/121803034-8e469980-cc7a-11eb-9690-6f8bdae68521.gif)<br><br>


### 5. 슬라이더 버튼

   기존의 이케아 사이트는 이미지나 내용이 많은 경우 슬라이더처럼 버튼이 나타나 다음 슬라이드
   또는 이전의 슬라이드로 이동할 수 있도록 되어있어 이를 유사하게 작동할 수 있도록 하였습니다.
   
   <br><br>![슬라이더더](https://user-images.githubusercontent.com/79969817/121803044-97d00180-cc7a-11eb-9501-9b70c5669e92.gif)<br><br>

### 6. 스마트폰 및 태블릿 미디어 쿼리

   중간고사 이후에 배운 미디어 쿼리를 이용하여 스마트폰과 태블릿 버전으로 나타나도록 했습니다.
   미디어 쿼리 전, flex를 사용했기에 flex-direction을 바꾸고, px 위주였던 이미지와 폰트 크기를
   유동적인 %, vw, vh 등을 사용하여 보다 생동감있게 구현하였습니다.

   특히 footer의 경우 사이트 사이즈를 줄이면 토글되는 기능을 스마트폰과 태블릿 버전에 모두 적용하였습니다.
   
   <br><br>![토글](https://user-images.githubusercontent.com/79969817/121802895-d4e7c400-cc79-11eb-94ee-63818686fd93.gif)<br><br>

### 7. id, class 변경

   중간고사 때 프로젝트에 비해 코드가 많아지면서 일관적이지 못한 부분을 일부 수정하고,
   여러 번 나타나는 버튼이나 div 등을 통일하였습니다.
