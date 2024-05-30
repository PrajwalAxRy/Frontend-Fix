import React from 'react';
import { Handle, Position } from 'reactflow';
import './node.css'

const nodeStyle = {
  border: '1px solid orange',
  padding: '10px',
  background: '#333',
  color: 'white',
  minWidth: '150px',
  borderRadius: '3px'
};

function CustomNode({ data, isConnectable }) {
    const paramIdentifiers = data.params.map(param => param.identifier);
  return (
    <div style={nodeStyle}>
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        style={{ top: '50%', borderRadius: 0 }}
      />
      <h1 className="node-title">{data.label}</h1>
      <hr style={{ backgroundColor: 'orange', height: '2px', border: 'none' }} />
      <div className="node-details">
      <div>params: <span className='node-params'>{JSON.stringify(paramIdentifiers)}</span></div>
        {/* <div className="node-response">Response: {data.response_object || 'None'}</div> */}
      </div>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        style={{ top: '50%', borderRadius: 0 }}
      />
    </div>
  );
}

export default CustomNode;
