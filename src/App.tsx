import TreeListView from "./components/TreeList";
import {useEffect, useState} from "react";
import {Tree} from "./components/TreeList/types";

const App = () => {
  const [treeData, setTreeData] = useState<Tree[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('./data.json');
      const data = await res.json();
      setTreeData(data)
    }

    fetchData();
  }, []);

  return (
    <TreeListView data={treeData} />
  )
}

export default App
