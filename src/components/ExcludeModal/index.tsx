import React, { useState } from 'react'
import Button from '../Button'
import Modal from '../Modal'
import { ButtonModal, ContentModal } from './styles'

interface Props {
    path: string
    display: boolean
    displayState: (state: boolean) => void
}

const ExcludeModal: React.FC<Props> = ({ path, display, displayState }: Props) => {

    function removeItem(path: string) {
        alert('item exlcuido  ' + path)
        displayState(false)
    }


    return (
        <ContentModal display={display}>

            <Modal closeButton={true} title='Excluir item' height={150} width={400}>
                <>
                    <span>Você tem certeza que deseja excluir esse item?</span>
                    <ButtonModal>
                        <Button title='Sim' height={30} onClick={() => removeItem(path)} />
                        <Button title='Não' height={30} onClick={() => displayState(false)} />
                    </ButtonModal >
                </>
            </Modal>
        </ContentModal>

    )
}

export default ExcludeModal