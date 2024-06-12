import React, { useEffect, useState, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  Controls,
  Connection,
  Edge as ReactFlowEdge,
  Node as ReactFlowNode,
  Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import styles from './updatenode.module.css';

interface NodeData {
  label: string;
}

interface CustomNode extends ReactFlowNode<NodeData> {
  style: React.CSSProperties;
}

const initialNodes: CustomNode[] = [
  {
    id: '1',
    data: { label: 'Node 1' },
    position: { x: 100, y: 100 },
    style: { borderRadius: '10px', width: '150px', backgroundColor: '#ffffff', color: '#000000', fontWeight: 'bold' },
  },
  {
    id: '2',
    data: { label: 'Node 2' },
    position: { x: 300, y: 100 },
    style: { borderRadius: '10px', width: '150px', backgroundColor: '#ffffff', color: '#000000', fontWeight: 'bold' },
  },
];

const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2' }];

const UpdateNode: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<ReactFlowNode<NodeData>>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<CustomNode | null>(null);
  const [nodeName, setNodeName] = useState<string>('');
  const [nodeBg, setNodeBg] = useState<string>('#ffffff');
  const [nodeHidden, setNodeHidden] = useState<boolean>(false);

  const updateNodeData = useCallback(
    (updatedNode: CustomNode) => {
      setNodes((nds) =>
        nds.map((n) => {
          if (n.id === updatedNode.id) {
            return {
              ...n,
              data: {
                ...n.data,
                label: updatedNode.data.label,
              },
              style: { ...n.style, backgroundColor: updatedNode.style?.backgroundColor, color: '#000000', fontWeight: 'bold' },
              hidden: updatedNode.hidden,
            };
          }
          return n;
        })
      );
    },
    [setNodes]
  );

  useEffect(() => {
    if (selectedNode) {
      updateNodeData({
        ...selectedNode,
        data: { label: nodeName },
        style: { backgroundColor: nodeBg, color: '#000000', fontWeight: 'bold' },
        hidden: nodeHidden,
      });
    }
  }, [nodeName, nodeBg, nodeHidden, selectedNode, updateNodeData]);

  const addNode = () => {
    const newNodeId = (nodes.length + 1).toString();
    const newNode: CustomNode = {
      id: newNodeId,
      data: { label: `Node ${newNodeId}` },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      style: { borderRadius: '10px', width: '150px', backgroundColor: '#ffffff', color: '#000000', fontWeight: 'bold' },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const onNodeClick = (_event: React.MouseEvent, node: ReactFlowNode<NodeData>) => {
    if ('style' in node) {
      const customNode = node as CustomNode;
      setSelectedNode(customNode);
      setNodeName(customNode.data.label);
      setNodeBg(customNode.style?.backgroundColor || '#ffffff');
      setNodeHidden(customNode.hidden || false);
    }
  };

  const onConnect = (params: Connection | ReactFlowEdge<any>) => setEdges((eds) => addEdge(params, eds));

  return (
    <div className={styles.container}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        minZoom={0.2}
        maxZoom={4}
        style={{ height: '100%', width: '100%' }}
      >
        <Background color="#404040" gap={16} />
        <Controls />
        {selectedNode && (
          <div className={styles.controls}>
            <label>Label:</label>
            <input value={nodeName} onChange={(evt) => setNodeName(evt.target.value)} />

            <label className={styles.bgLabel}>Background:</label>
            <input value={nodeBg} onChange={(evt) => setNodeBg(evt.target.value)} />

            <div className="updatenode__checkboxwrapper">
              <label>Hidden:</label>
              <input
                type="checkbox"
                checked={nodeHidden}
                onChange={(evt) => setNodeHidden(evt.target.checked)}
              />
            </div>
            <button onClick={addNode}>Add Node</button>
          </div>
        )}
      </ReactFlow>
    </div>
  );
};

const App: React.FC = () => (
  <ReactFlowProvider>
    <UpdateNode />
  </ReactFlowProvider>
);

export default App;