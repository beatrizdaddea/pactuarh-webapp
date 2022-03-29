import * as S from './Performance'
import Sidebar from 'ui/components/Sidebar'
import Modal from 'react-modal'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Performance() {

  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalIsOpenNew, setIsOpenNew] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModalNew() {
    setIsOpenNew(true)
  }

  function closeModalNew() {
    setIsOpenNew(false)
  }
    return(
            <>
             <S.Body>
                <Sidebar />
                <S.Title>
                  <S.Container>Bem vindo, Luciano 😁</S.Container>
                </S.Title>
              <S.Container>
                <S.Test>
                   <div>
                    <p>Avaliado: Giovanna </p>
                    <p>Cargo:Dev. Júnior </p>
                    <p>Departamento:Dev. Front end </p>
                    <p>Avaliador:Luciano </p>
                  </div>
                  
                </S.Test>
                <S.Test>
                  <div>
                    <h4> Critérios </h4> 
                    <p> Insuficiente </p>
                    <p> 1 - 4</p>
                    <p> Suficiente</p>
                    <p>5 - 7 </p>
                    <p> Excede </p>
                    <p>  8 - 10</p>

                  </div> 

                </S.Test>
                
              </S.Container>


             </S.Body>
            </>
    )
}