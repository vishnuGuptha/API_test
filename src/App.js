import { useState } from "react";
import '../src/App.css'
export default function App() {
  const [responseData, setResponseData] = useState([]);
  const [active, setActive] = useState(false);
  const [arrBody, setArrbody] = useState();
  const [apiUrl, setApiUrl] = useState();
  // const arrBody = [
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964"
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "audit_type_id": 1
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-01"
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "from_dt": "2023-09-01",
  //     "to_dt": "2023-12-01"
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "from_dt": "2023-11-01",
  //     "to_dt": "2023-12-01",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-01",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "from_dt": "2023-11-01",
  //     "to_dt": "2023-12-01",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-01",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "from_dt": "2023-11-01",
  //     "to_dt": "2023-12-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "from_dt": "2023-11-01",
  //     "to_dt": "2023-12-01",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "from_dt": "2023-11-01",
  //     "to_dt": "2023-12-01",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "from_dt": "2023-11-01",
  //     "to_dt": "2023-12-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "from_dt": "2023-11-01",
  //     "to_dt": "2023-12-01",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "from_dt": "2023-11-01",
  //     "to_dt": "2023-12-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "client_id": 1,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-01",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-01",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-01",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "38396538643661652D656565372D346564382D386335632D613566313362326533396165",
  //     "uid": "61333931376436302D356163332D343330322D626432642D613031623161663333303964",
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-01",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Auditors Name**Adnana",
  //         "Room Number/Location**14108209"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "client_id": 20,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Auditors Name**Adnana",
  //         "Room Number/Location**14108209"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "client_id": 20,
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-08",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Auditors Name**Adnana",
  //         "Room Number/Location**14108209"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "client_id": 20,
  //     "from_dt": "2023-09-01",
  //     "to_dt": "2024-04-08",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Auditors Name**Adnana",
  //         "Room Number/Location**14108209"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "client_id": 20,
  //     "from_dt": "2023-09-01",
  //     "to_dt": "2024-04-08",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Auditors Name**Adnana",
  //         "Room Number/Location**14108209"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "client_id": 20,
  //     "from_dt": "2023-09-01",
  //     "to_dt": "2024-04-08",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Auditors Name**Adnana",
  //         "Room Number/Location**14108209"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "client_id": 20,
  //     "to_dt": "2024-04-08",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Auditors Name**Adnana",
  //         "Room Number/Location**14108209"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "client_id": 20,
  //     "Store_id": 1,
  //     "audit_type_id": 10,
  //     "from_dt": "2023-09-01",
  //     "to_dt": "2024-04-08",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Auditors Name**Adnana",
  //         "Room Number/Location**14108209"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "client_id": 20,
  //     "Store_id": 1,
  //     "audit_type_id": 10,
  //     "from_dt": "2023-09-01",
  //     "to_dt": "2024-04-08"
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "client_id": 20,
  //     "Store_id": 1,
  //     "audit_type_id": 10,
  //     "from_dt": "2023-09-01",
  //     "to_dt": "2024-04-08",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Auditors Name**Adnana",
  //         "Room Number/Location**14108209"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "client_id": 20,
  //     "from_dt": "2023-09-01",
  //     "to_dt": "2024-04-08",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Auditors Name**Adnana",
  //         "Room Number/Location**14108209"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237"
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "client_id": 20
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "client_id": 20,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Auditors Name**Adnana",
  //         "Room Number/Location**14108209"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "client_id": 20,
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Auditors Name**Adnana",
  //         "Room Number/Location**14108209"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "client_id": 20,
  //     "from_dt": "2023-09-01",
  //     "to_dt": "2024-04-08",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Auditors Name**Adnana",
  //         "Room Number/Location**14108209"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "client_id": 20,
  //     "audit_type_id": 10,
  //     "from_dt": "2023-09-01",
  //     "to_dt": "2024-04-08",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Auditors Name**Adnana",
  //         "Room Number/Location**14108209"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "client_id": 20,
  //     "audit_type_id": 10,
  //     "from_dt": "2023-09-01",
  //     "to_dt": "2024-04-08",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "client_id": 20,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "client_id": 20,
  //     "audit_type_id": 10,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "from_dt": "2023-09-01",
  //     "to_dt": "2024-04-08",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "client_id": 20,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "client_id": 20,
  //     "from_dt": "2023-09-01",
  //     "to_dt": "2024-04-08",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "client_id": 20,
  //     "audit_type_id": 10,
  //     "from_dt": "2023-09-01",
  //     "to_dt": "2024-04-08",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634"
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "client_id": 1
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "client_id": 1,
  //     "audit_type_id": 1
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-01"
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "from_dt": "2023-09-01",
  //     "to_dt": "2024-04-01"
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "client_id": 1,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**East,Country**Africa,test**def"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**East,Country**Africa,test**def"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-01",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**East,Country**Africa,test**def"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**East,Country**Africa,test**def"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "mobile no**123456789,test1_name**ent"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "mobile no**123456789,test1_name**ent"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "mobile no**123456789,test1_name**ent"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "client_id": 1,
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "mobile no**123456789,test1_name**ent"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "mobile no**123456789,test1_name**ent"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "mobile no**123456789,test1_name**ent"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "from_dt": "2023-11-01",
  //     "to_dt": "2024-04-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "mobile no**123456789,test1_name**ent"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "mobile no**123456789,test1_name**ent"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "client_id": 1,
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "mobile no**123456789,test1_name**ent"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "mobile no**123456789,test1_name**ent"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "from_dt": "2023-11-01",
  //     "to_dt": "2024-04-01",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**East,Country**Africa,test**def"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "mobile no**123456789,test1_name**ent"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "mobile no**123456789,test1_name**ent"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**East,Country**Africa,test**def"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "mobile no**123456789,test1_name**ent"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**East,Country**Africa,test**def"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "mobile no**123456789,test1_name**ent"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**East,Country**Africa,test**def"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "client_id": 1,
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "mobile no**123456789,test1_name**ent"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**East,Country**Africa,test**def"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "client_id": 1,
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "mobile no**123456789,test1_name**ent"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**East,Country**Africa,test**def"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-01",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Sec test field**454",
  //         "Sec test field**78",
  //         "Test filed**dfg",
  //         "Test filed**zxc"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-01",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**East,Country**Africa,test**def"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "mobile no**123456789,test1_name**ent"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31663938353666622D346431322D343662392D613262362D376531396666303434643063",
  //     "uid": "36653030656234632D366430612D343738342D613961362D646638636237626264396634",
  //     "from_dt": "2023-09-01",
  //     "to_dt": "2024-04-08",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "State**Rajasthan",
  //         "District**Nagaur",
  //         "Village**Sukhwasi"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733"
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 1,
  //     "audit_type_id": 3,
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNNum**123",
  //         "FNtext**Test",
  //         "FNtext**Test",
  //         "FNtextt**List 1|List 2",
  //         "FNtextt**List 2"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "KA**Bangalore"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 1
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 1,
  //     "audit_type_id": 3
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 1,
  //     "audit_type_id": 3,
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNNum**123",
  //         "FNtext**Test",
  //         "FNtext**Test",
  //         "FNtextt**List 1|List 2",
  //         "FNtextt**List 2"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 1,
  //     "audit_type_id": 3,
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "FNNum**123",
  //         "FNNum**123",
  //         "FNtext**Test",
  //         "FNtext**Test",
  //         "FNtextt**List 1|List 2",
  //         "FNtextt**List 2"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "KA**Bangalore"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 1,
  //     "audit_type_id": 3,
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "FNNum**123",
  //         "FNNum**123",
  //         "FNtext**Test",
  //         "FNtext**Test",
  //         "FNtextt**List 1|List 2",
  //         "FNtextt**List 2"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "KA**Bangalore"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 1,
  //     "audit_type_id": 3,
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNNum**123",
  //         "FNtext**Test",
  //         "FNtext**Test",
  //         "FNtextt**List 1|List 2",
  //         "FNtextt**List 2"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "KA**Bangalore"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 1,
  //     "audit_type_id": 3,
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNNum**123",
  //         "FNtext**Test",
  //         "FNtext**Test",
  //         "FNtextt**List 1|List 2",
  //         "FNtextt**List 2"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "KA**Bangalore"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 1,
  //     "audit_type_id": 3,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "KA**Bangalore"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 1,
  //     "audit_type_id": 3,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "KA**Bangalore"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 1,
  //     "audit_type_id": 3,
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "FNNum**123",
  //         "FNNum**123",
  //         "FNtext**Test",
  //         "FNtext**Test",
  //         "FNtextt**List 1|List 2",
  //         "FNtextt**List 2"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 1,
  //     "audit_type_id": 3,
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-08",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNNum**123",
  //         "FNtext**Test",
  //         "FNtext**Test",
  //         "FNtextt**List 1|List 2",
  //         "FNtextt**List 2"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "KA**Bangalore"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-08",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNNum**123",
  //         "FNtext**Test",
  //         "FNtext**Test",
  //         "FNtextt**List 1|List 2",
  //         "FNtextt**List 2"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "KA**Bangalore"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 1,
  //     "audit_type_id": 3,
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-08"
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-08"
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 1,
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-08"
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "audit_type_id": 3,
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-08"
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 1,
  //     "audit_type_id": 3,
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-08",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNNum**123",
  //         "FNtext**Test",
  //         "FNtext**Test",
  //         "FNtextt**List 1|List 2",
  //         "FNtextt**List 2"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 1,
  //     "audit_type_id": 3,
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-08",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "KA**Bangalore"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 1,
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-08",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "KA**Bangalore"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "audit_type_id": 3,
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-08",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "KA**Bangalore"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 1,
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-08",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNNum**123",
  //         "FNtext**Test",
  //         "FNtext**Test",
  //         "FNtextt**List 1|List 2",
  //         "FNtextt**List 2"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "audit_type_id": 3,
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-08",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNNum**123",
  //         "FNtext**Test",
  //         "FNtext**Test",
  //         "FNtextt**List 1|List 2",
  //         "FNtextt**List 2"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-08",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNNum**123",
  //         "FNtext**Test",
  //         "FNtext**Test",
  //         "FNtextt**List 1|List 2",
  //         "FNtextt**List 2"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "KA**Bangalore"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-08",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "FNNum**123",
  //         "FNNum**123",
  //         "FNtext**Test",
  //         "FNtext**Test",
  //         "FNtextt**List 1|List 2",
  //         "FNtextt**List 2"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "KA**Bangalore"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-08",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "FNNum**123",
  //         "FNNum**123",
  //         "FNtext**Test",
  //         "FNtext**Test",
  //         "FNtextt**List 1|List 2",
  //         "FNtextt**List 2"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "KA**Bangalore"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 1,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "KA**Bangalore"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 1,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "KA**Bangalore"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 1,
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNNum**123",
  //         "FNtext**Test",
  //         "FNtext**Test",
  //         "FNtextt**List 1|List 2",
  //         "FNtextt**List 2"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 1,
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "FNNum**123",
  //         "FNNum**123",
  //         "FNtext**Test",
  //         "FNtext**Test",
  //         "FNtextt**List 1|List 2",
  //         "FNtextt**List 2"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064"
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "audit_type_id": 2
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "audit_type_id": 2,
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-01"
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "audit_type_id": 2,
  //     "from_dt": "2023-09-01",
  //     "to_dt": "2023-12-01"
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "audit_type_id": 2,
  //     "from_dt": "2022-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "from_dt": "2022-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "from_dt": "2022-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "from_dt": "2022-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "from_dt": "2022-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "from_dt": "2022-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "from_dt": "2022-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "from_dt": "2022-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "from_dt": "2022-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "from_dt": "2022-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "from_dt": "2022-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "from_dt": "2022-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "audit_type_id": 1,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "client_id": 1,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "from_dt": "2022-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "from_dt": "2022-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "from_dt": "2022-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "from_dt": "2022-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**North",
  //         "North**NewYork",
  //         "NewYork**NewYork City"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Cleaning Partner**",
  //         "Cleaning Partner**David",
  //         "Shift Supervisor**",
  //         "Shift Supervisor**Amit"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Auditors Name**Adnana",
  //         "Room Number/Location**14108209"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "client_id": 20,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Auditors Name**Adnana",
  //         "Room Number/Location**14108209"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031"
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "audit_type_id": 1
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "audit_type_id": 1,
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01"
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "audit_type_id": 1,
  //     "from_dt": "2023-11-01",
  //     "to_dt": "2024-11-01"
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "audit_type_id": 1,
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "audit_type_id": 1,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "audit_type_id": 1,
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "audit_type_id": 1,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "audit_type_id": 1,
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "audit_type_id": 1,
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "audit_type_id": 1,
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "audit_type_id": 1,
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "audit_type_id": 1,
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "audit_type_id": 1,
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "audit_type_id": 1,
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "audit_type_id": 1,
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "audit_type_id": 1,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "audit_type_id": 1,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "audit_type_id": 1,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "audit_type_id": 1,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "client_id": 16,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "33613066613564312D363832392D346138362D623236372D396262613037393666643032",
  //     "uid": "35643038666434372D643434332D343864612D383339322D363165383738656531303031",
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Region**South",
  //         "Zones**Purple"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Phone**",
  //         "Room 1**",
  //         "Room 2**",
  //         "Room 3**",
  //         "Room 4**",
  //         "Room 5**",
  //         "Room 6**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Auditors Name**Adnana",
  //         "Room Number/Location**14108209"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "37333463366562342D376633332D343764332D613033382D633137313162633930626538",
  //     "uid": "30636435616331612D323365312D343763322D616532382D396332663566353438653237",
  //     "client_id": 20,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Auditors Name**Adnana",
  //         "Room Number/Location**14108209"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733"
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "audit_type_id": 2
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "audit_type_id": 2,
  //     "from_dt": "2023-03-01",
  //     "to_dt": "2024-04-01"
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "audit_type_id": 2,
  //     "from_dt": "2023-09-01",
  //     "to_dt": "2023-12-01"
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "audit_type_id": 2,
  //     "from_dt": "2022-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "audit_type_id": 2,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "audit_type_id": 2,
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "audit_type_id": 2,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "audit_type_id": 2,
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "audit_type_id": 2,
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "audit_type_id": 2,
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "audit_type_id": 2,
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "39363663383664312D306436332D343963322D623563362D363331316164366235643134",
  //     "uid": "36396634623630312D656633612D343931312D613039662D623734616334383561653064",
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "audit_type_id": 2,
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "audit_type_id": 2,
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "audit_type_id": 2,
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "audit_type_id": 2,
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     },
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "audit_type_id": 2,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "audit_type_id": 2,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "audit_type_id": 2,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "audit_type_id": 2,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 2,
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "OR",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "OR",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "from_dt": "2020-11-01",
  //     "to_dt": "2024-11-01",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "AP**EGDT"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "FNNum**123",
  //         "FNemail**anuvarma345@gmail.com",
  //         "FNtext**Test",
  //         "FNtextt**"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Auditors Name**Adnana",
  //         "Room Number/Location**14108209"
  //       ]
  //     }
  //   },
  //   {
  //     "guid": "31326261353838612D623964632D346133612D383064652D633266323933643564393433",
  //     "uid": "37666465303737642D336533642D343664652D383239372D653662383634653530613733",
  //     "client_id": 20,
  //     "location_tag_names": {
  //       "condition": "AND",
  //       "values": [
  //         "Owned - UK**London City Shoreditch",
  //         "Owned - ALL**London City Shoreditch",
  //         "UK**London City Shoreditch"
  //       ]
  //     },
  //     "custom_fields": {
  //       "condition": "AND",
  //       "values": [
  //         "Auditors Name**Adnana",
  //         "Room Number/Location**14108209"
  //       ]
  //     }
  //   }
  // ]

  const handleApiUrlChange = () => {

  }

  const fetchData = async () => {
    try {
      for (const [index, eachBody] of arrBody.entries()) {
        const startTime = performance.now();

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(eachBody)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const endTime = performance.now();
        const timeTaken = endTime - startTime;

        setResponseData(prevData => [
          ...prevData,
          { index, success: true, timeTaken }
        ]);
      }
      setActive(true);
    } catch (error) {
      console.error(error);
      setResponseData(prevData => [
        ...prevData,
        { index: prevData.length, success: false, errorMessage: error.message }
      ]);
    }
  };

  const rowTimeTaken = () => {
    let sum = 0;
    responseData.map((data) => {
      sum += data.timeTaken;
    })
    let avg = undefined;
    avg = sum / responseData.length;
    return avg;
  }

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const fileContent = await readFileContent(file);
      const jsonData = JSON.parse(fileContent);
      setArrbody(jsonData);
      console.log(jsonData, '===================');
    } catch (error) {
      console.error("Error reading or parsing JSON file:", error);
    }
  };

  const readFileContent = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsText(file);
    });
  };

  const predefinedUrls = [
    "http://35.179.99.81:8000/dashboard/query_api/keyQuestions/self",
    // Add more predefined URLs here
  ];
  
  return (
    <>
      <input
        type="file"
        accept=".json"
        onChange={handleFileChange}
        style={{ marginBottom: '10px' }}
      />
      <input
          type="text"
          list="urls"
          placeholder="Enter API URL"
          value={apiUrl}
          onChange={(e)=>setApiUrl(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <datalist id="urls">
          {predefinedUrls.map((url, index) => (
            <option key={index} value={url} />
          ))}
        </datalist>
      <button onClick={fetchData}>Call API</button>
      <div className="parent-container">
        <h2>Response Data</h2>
        <table className="table-container">
          <thead>
            <tr>
              <th>Index</th>
              <th>Success</th>
              <th>Time Taken (ms)</th>
            </tr>
          </thead>
          <tbody>
            {responseData.map((row, index) => (
              <tr key={index}>
                <td>{row.index}</td>
                <td>{row.success ? 'Yes' : 'No'}</td>
                <td>{row.timeTaken}</td>
              </tr>
            ))}
          </tbody>
          {active && <tfoot>
            <tr>
              <td colSpan={'3'} style={{ marginLeft: "auto", marginRight: 'auto', "textAlign": "-webkit-center" }}>{"Avg Time : " + rowTimeTaken()}</td>
            </tr>
          </tfoot>}
        </table>
      </div>
    </>
  );
}
