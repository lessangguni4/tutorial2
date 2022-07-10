import React, { Component } from 'react'
import {Routes,Route} from 'react-router-dom'
import {SettingHomePage,SettingLoginPage,SettingRegisterPage} from '../Setting'

export default function ClassRouter(){
    return (
      <Routes>
        <Route path="/" element={<SettingHomePage/>}/>
        <Route path="/login" element={<SettingLoginPage/>}/>
        <Route path="/register" element={<SettingRegisterPage/>}/>
      </Routes>
    );
  }
