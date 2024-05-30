import React from "react";
import "./SideModal.css";
import { Info, X } from "react-feather";
import { Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import StyledTextField from "./StyledTextField";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import goButton from '../../assets/goButton.png'

function SideModal({ isOpen, toggleModal }) {
  const dispatch = useDispatch();
  const isDatabaseMocked = useSelector((state) => state.isDatabaseMocked);

  const dependencies = [
    { name: 'httpx', checked: true },
    { name: 'product_client', checked: true },
    { name: 'sqlalchemy.orm', checked: false },
    { name: 'cart_crud', checked: false },
    { name: 'cartModel', checked: false },
  ];

  const databases = [
    { name: 'I want to mock databases', checked: true },
    { name: 'I don’t want to mock database', checked: false },
  ];

  const [name, setName] = React.useState(' ');

  return (
    <div className={`pl-2 h-full side-modal ${isOpen ? "open" : ""}`}>
      <div className="modal-header -ml-2 w-[98%]">
        <h2 className="text-xl pb-3">cart_campaign</h2>

        <button onClick={toggleModal} className="modal-close-button">
          <X size={25} />
        </button>
      </div>

      <div className="modal-content">
        <div className="info">
          <div className="flex items-center gap-2 pt-4">
            <Info
              size={22}
              color="orange"
              style={{ verticalAlign: "middle", paddingRight: "1px" }}
            />{" "}
            <p className="ptext">Last 2 commits scanned</p>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <Info
              size={22}
              color="orange"
              style={{ verticalAlign: "middle", paddingRight: "1px" }}
            />{" "}
            <p className="ptext">5 entry points identified</p>
          </div>
        </div>

        <div className="form">
          <Row>
            <label className="ptext text-lg" htmlFor="selected-flow">Selected flow</label>
          </Row>
          <Row>
            <select className="fontright text-lg" id="selected-flow">
              <option className="fontright text-lg" value="POST/carts/{carts_id}">
                POST/carts/{"{carts_id}"}
              </option>
              <option className="fontright text-lg" value="POST/carts/{carts_weigth}">
                POST/carts/{"{carts_weight}"}
              </option>
            </select>
          </Row>

          <div className="backgroundColor text-white pt-6 rounded-md">
            <h2 className="fontright text-lg font-semibold mb-0 tracking-wide">Dependencies</h2>
            <p className="text-base text-gray-400 mb-4">Select the ones you want to mock</p>
            <div className="space-y-4 pr-4">
              {dependencies.map((dependency, index) => (
                <div key={index} className="flex justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id={dependency.name}
                      name={dependency.name}
                      defaultChecked={dependency.checked}
                      className="h-4 w-5 mr-3 shadow-2xl"
                    />
                    <label htmlFor={dependency.name} className="pl-1 justfont tracking-wider text-base">
                      {dependency.name}
                    </label>
                  </div>
                  <img src={goButton} className="w-5 cursor-pointer" alt="button that will lead to another screen" />
                </div>
              ))}
            </div>
          </div>

          <div className="backgroundColor text-white pt-6 rounded-md">
            <h2 className="fontright text-lg font-semibold mb-0 tracking-wide">Dependencies</h2>
            <p className="text-base text-gray-400 mb-4">Select the ones you want to mock</p>
            <div className="space-y-2">
              {databases.map((databases, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={databases.name}
                    name={databases.name}
                    defaultChecked={databases.checked}
                    className="h-4 w-5 mr-3 shadow-2xl"
                  />
                  <label htmlFor={databases.name} className="pl-1 justfont tracking-wider text-base">
                    {databases.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <h2 className="fontright text-lg font-semibold mt-6 mb-4 tracking-wide">Dependencies</h2>

          <div className="pr-3">
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 0, width: '100%' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-controlled"
                label="Database User"
                value={name}
                onChange={(event) => setName(event.target.value)}
                InputProps={{
                  style: { color: 'green' }, // Set input text color to black
                }}
                InputLabelProps={{
                  style: { fontSize: '1.2rem', color: '#BBBBBB', fontWeight: 'semibold' },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'orange', // Set border color to orange
                    },
                    '&:hover fieldset': {
                      borderColor: 'orange', // Set border color to orange on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'orange', // Set border color to orange when focused
                    },
                  },
                }}
              />
            </Box>
          </div>

          <div className="mt-6 pr-3">
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 0, width: '100%' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-controlled"
                label="Database Password"
                value={name}
                onChange={(event) => setName(event.target.value)}
                InputProps={{
                  style: { color: 'green' }, // Set input text color to black
                }}
                InputLabelProps={{
                  style: { fontSize: '1.2rem', color: '#BBBBBB', fontWeight: 'semibold' },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'orange', // Set border color to orange
                    },
                    '&:hover fieldset': {
                      borderColor: 'orange', // Set border color to orange on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'orange', // Set border color to orange when focused
                    },
                  },
                }}
              />
            </Box>
          </div>

          <div className="mt-6 pr-3">
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 0, width: '100%' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-controlled"
                label="Database Hostname"
                value={name}
                onChange={(event) => setName(event.target.value)}
                InputProps={{
                  style: { color: 'green' }, // Set input text color to black
                }}
                InputLabelProps={{
                  style: { fontSize: '1.2rem', color: '#BBBBBB', fontWeight: 'semibold' },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'orange', // Set border color to orange
                    },
                    '&:hover fieldset': {
                      borderColor: 'orange', // Set border color to orange on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'orange', // Set border color to orange when focused
                    },
                  },
                }}
              />
            </Box>
          </div>

          <div className=" min-h-20"></div>
        </div>
      </div>

      <div className="modal-footer flex justify-end">
        <button type="button" className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-md text-sm px-8 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
          Save     
        </button>
      </div>
    </div>
  );
}

export default SideModal;
