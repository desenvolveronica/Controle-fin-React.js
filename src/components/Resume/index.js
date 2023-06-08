import React from 'react'
import * as R from './styles'
import ResumeItem from '../ResumeItem'
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = () => {
  return <R.Container>
    <ResumeItem title="Entrada" Icon={FaRegArrowAltCircleUp}/>
    <ResumeItem title="Saída" Icon={FaRegArrowAltCircleDown}/>
    <ResumeItem title="Total" Icon={FaDollarSign}/>
  </R.Container>

}
export default Resume;