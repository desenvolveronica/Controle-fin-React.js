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
    <ResumeItem title="Entrada" Icon={FaRegArrowAltCircleUp} value="100"/>
    <ResumeItem title="Saída" Icon={FaRegArrowAltCircleDown} value="100"/>
    <ResumeItem title="Total" Icon={FaDollarSign} value="100"/>
  </R.Container>

}
export default Resume;