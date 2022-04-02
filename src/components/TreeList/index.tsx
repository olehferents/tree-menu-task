import {Tree} from "./types";
import TreeNodeView from "../TreeNode";

interface Props {
    data: Tree[]
}

const TreeListView = (props: Props) => {
    const { data } = props;

    return (
        <>
            {data.map((tree, i) => {
                return <TreeNodeView key={i} node={tree} />
            })}
        </>
    )
}

export default TreeListView;
