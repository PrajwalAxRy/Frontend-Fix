import React, { useState, useCallback } from 'react';
import ReactFlow, { addEdge, applyNodeChanges, applyEdgeChanges, Position, Controls, MiniMap, Background } from 'reactflow'; // Ensure Position is imported
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode/CustomNode';


const jsonData =     [
  {
    "function": "/litellm/proxy/proxy_server.py:chat_completion",
    "params": [
      {
        "identifier": "request",
        "type": "Request"
      },
      {
        "identifier": "fastapi_response",
        "type": "Response"
      }
    ],
    "response_object": "",
    "children": [
      {
        "function": "/litellm/proxy/proxy_server.py:ProxyConfig.load_team_config",
        "params": [
          {
            "identifier": "self",
            "type": null
          },
          {
            "identifier": "team_id",
            "type": "str"
          }
        ],
        "response_object": "",
        "children": [
          {
            "function": "/litellm/proxy/proxy_server.py:ProxyConfig.get_config",
            "params": [
              {
                "identifier": "self",
                "type": null
              }
            ],
            "response_object": "dict",
            "children": [
              {
                "function": "/litellm/proxy/utils.py:update_spend",
                "params": [
                  {
                    "identifier": "prisma_client",
                    "type": "PrismaClient"
                  },
                  {
                    "identifier": "db_writer_client",
                    "type": "Optional[HTTPHandler]"
                  },
                  {
                    "identifier": "proxy_logging_obj",
                    "type": "ProxyLogging"
                  }
                ],
                "response_object": "",
                "children": [
                  {
                    "function": "/litellm/proxy/utils.py:print_verbose",
                    "params": [
                      {
                        "identifier": "print_statement",
                        "type": null
                      }
                    ],
                    "response_object": "",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "function": "/litellm/proxy/utils.py:_is_valid_team_configs",
            "params": [],
            "response_object": "",
            "children": []
          }
        ]
      },
      {
        "function": "/litellm/proxy/proxy_server.py:parse_cache_control",
        "params": [
          {
            "identifier": "cache_control",
            "type": null
          }
        ],
        "response_object": "",
        "children": []
      },
      {
        "function": "/litellm/proxy/proxy_server.py:select_data_generator",
        "params": [
          {
            "identifier": "response",
            "type": null
          },
          {
            "identifier": "user_api_key_dict",
            "type": null
          }
        ],
        "response_object": "",
        "children": [
          {
            "function": "/litellm/proxy/proxy_server.py:async_data_generator",
            "params": [
              {
                "identifier": "response",
                "type": null
              },
              {
                "identifier": "user_api_key_dict",
                "type": null
              }
            ],
            "response_object": "",
            "children": [
              {
                "function": "/litellm/proxy/utils.py:ProxyLogging.post_call_failure_hook",
                "params": [
                  {
                    "identifier": "self",
                    "type": null
                  },
                  {
                    "identifier": "original_exception",
                    "type": "Exception"
                  },
                  {
                    "identifier": "user_api_key_dict",
                    "type": "UserAPIKeyAuth"
                  }
                ],
                "response_object": "",
                "children": [
                  {
                    "function": "/litellm/proxy/utils.py:ProxyLogging.alerting_handler",
                    "params": [
                      {
                        "identifier": "self",
                        "type": null
                      },
                      {
                        "identifier": "message",
                        "type": "str"
                      },
                      {
                        "identifier": "level",
                        "type": "Literal[\"Low\", \"Medium\", \"High\"]"
                      },
                      {
                        "identifier": "alert_type",
                        "type": "Literal[\n            \"llm_exceptions\",\n            \"llm_too_slow\",\n            \"llm_requests_hanging\",\n            \"budget_alerts\",\n            \"db_exceptions\",\n        ]"
                      }
                    ],
                    "response_object": "",
                    "children": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "function": "/litellm/proxy/utils.py:ProxyLogging.during_call_hook",
        "params": [
          {
            "identifier": "self",
            "type": null
          },
          {
            "identifier": "data",
            "type": "dict"
          },
          {
            "identifier": "user_api_key_dict",
            "type": "UserAPIKeyAuth"
          },
          {
            "identifier": "call_type",
            "type": "Literal[\n            \"completion\",\n            \"embeddings\",\n            \"image_generation\",\n            \"moderation\",\n            \"audio_transcription\",\n        ]"
          }
        ],
        "response_object": "",
        "children": []
      },
      {
        "function": "/litellm/proxy/utils.py:ProxyLogging.post_call_failure_hook",
        "params": [
          {
            "identifier": "self",
            "type": null
          },
          {
            "identifier": "original_exception",
            "type": "Exception"
          },
          {
            "identifier": "user_api_key_dict",
            "type": "UserAPIKeyAuth"
          }
        ],
        "response_object": "",
        "children": [
          {
            "function": "/litellm/proxy/utils.py:ProxyLogging.alerting_handler",
            "params": [
              {
                "identifier": "self",
                "type": null
              },
              {
                "identifier": "message",
                "type": "str"
              },
              {
                "identifier": "level",
                "type": "Literal[\"Low\", \"Medium\", \"High\"]"
              },
              {
                "identifier": "alert_type",
                "type": "Literal[\n            \"llm_exceptions\",\n            \"llm_too_slow\",\n            \"llm_requests_hanging\",\n            \"budget_alerts\",\n            \"db_exceptions\",\n        ]"
              }
            ],
            "response_object": "",
            "children": []
          }
        ]
      },
      {
        "function": "/litellm/proxy/utils.py:ProxyLogging.post_call_success_hook",
        "params": [
          {
            "identifier": "self",
            "type": null
          },
          {
            "identifier": "response",
            "type": "Union[ModelResponse, EmbeddingResponse, ImageResponse]"
          },
          {
            "identifier": "user_api_key_dict",
            "type": "UserAPIKeyAuth"
          }
        ],
        "response_object": "",
        "children": []
      },
      {
        "function": "/litellm/proxy/utils.py:ProxyLogging.pre_call_hook",
        "params": [
          {
            "identifier": "self",
            "type": null
          },
          {
            "identifier": "user_api_key_dict",
            "type": "UserAPIKeyAuth"
          },
          {
            "identifier": "data",
            "type": "dict"
          },
          {
            "identifier": "call_type",
            "type": "Literal[\n            \"completion\",\n            \"embeddings\",\n            \"image_generation\",\n            \"moderation\",\n            \"audio_transcription\",\n        ]"
          }
        ],
        "response_object": "",
        "children": [
          {
            "function": "/litellm/proxy/utils.py:print_verbose",
            "params": [
              {
                "identifier": "print_statement",
                "type": null
              }
            ],
            "response_object": "",
            "children": []
          }
        ]
      },
      {
        "function": "/litellm/proxy/utils.py:_is_valid_team_configs",
        "params": [],
        "response_object": "",
        "children": []
      },
      {
        "function": "/litellm/proxy/utils.py:_read_request_body",
        "params": [
          {
            "identifier": "request",
            "type": null
          }
        ],
        "response_object": "",
        "children": []
      }
    ]
  }
]

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
};


function processData(data, nodes = [], edges = [], parentId = null, position = { x: 0, y: 0 }, level = 0) {
  data.forEach((item, index) => {
    const nodeId = `${level}-${index}`;
    const newX = position.x + 860;
    const newY = position.y + (index % 2 === 0 ? -150 * Math.floor(index / 2) : 150 * Math.ceil(index / 2));

    const newNode = {
      id: nodeId,
      type: 'customNode',
      position: { x: newX, y: newY },
      data: {
        label: item.function.split(':').pop(),
        response_object: item.response_object || 'None',
        params: item.params 
      },
      ...nodeDefaults
    };
    nodes.push(newNode);

    if (parentId) {
      const newEdge = { id: `e${parentId}-${nodeId}`, source: parentId, target: nodeId };
      edges.push(newEdge);
    }

    if (item.children && item.children.length > 0) {
      processData(item.children, nodes, edges, nodeId, { x: newX, y: newY }, level + 1);
    }
  });

  return { nodes, edges };
}


const nodeTypes = { customNode: CustomNode};

function Content() {
  const { nodes: initialNodes, edges: initialEdges } = processData(jsonData);

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
  const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);
  const onConnect = useCallback((connection) => setEdges((eds) => addEdge(connection, eds)), []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      style={{ width: '100%', height: '90vh', backgroundcolor:'orange' }} // Adjust as needed
    >
    {/* <Controls/> */}
        {/* <MiniMap /> */}
        <Background variant="dots" gap={12} size={1} color='orange' />
      </ReactFlow>
  );
}

export default Content;
