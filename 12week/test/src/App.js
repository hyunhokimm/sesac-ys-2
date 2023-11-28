import "./App.css";
import ClassText from "./components/ClassText";
import Food from "./components/Food";
import BestSeller from "./components/bestSeller";

function App() {
  return (
    <div>
      <Food food="사과" />
      <BestSeller
        title="나의 하루는 4시 40분에 시작한다."
        author=" 김유진"
        price="13,500원"
        type="자기계발서"
      />
      <ClassText text="집으로 고~" />
    </div>
  );
}

export default App;
