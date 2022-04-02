import {Tree} from "../TreeList/types";
import {useState} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Container, EmptyBlock, NodesContainer } from "./styles";
import TreeListView from "../TreeList";

interface Props {
    node: Tree
}

const TreeNodeView = (props: Props) => {
    const { node } = props;

    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const hasChild = !!node.nodes && node.nodes.length > 0;

    const handleOnClick = () => {
        setIsCollapsed(prevState => !prevState)
        console.log(`Clicked node ${node.title}`)
    }

    return (
        <>
            <Container onClick={handleOnClick}>
                {hasChild ? (
                    isCollapsed ? <ExpandLessIcon /> : <ExpandMoreIcon />
                ) : <EmptyBlock />}
                {node.title}
                <EmptyBlock />
            </Container>
            <NodesContainer>
                {hasChild && isCollapsed && (
                    <TreeListView data={node.nodes} />
                )}
            </NodesContainer>
        </>
    )
}

export default TreeNodeView
