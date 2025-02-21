import React from 'react'
import { Modal, ModalBody, ModalContent, ModalTrigger } from '../ui/animated-modal'
import { FaQuestionCircle } from 'react-icons/fa'
import { CButton } from '../Animated/CButton'
import FAQAccordion from '../Animated/FAQAccordion'

type Props = {}

const FAQModal = (props: Props) => {
  return (
    <Modal>
    <ModalTrigger className="p-0 m-0 w-max">
    <span className="flex gap-2 flex-row items-center justify-center
            sm:justify-start"><FaQuestionCircle /> FAQ's</span>
    </ModalTrigger>
    <ModalBody>
    <CButton
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="0rem"
          style={{
            backgroundColor: "#131415",
            borderRadius: "0rem",
          }}
          className="md:w-[38rem] md:h-[38rem] w-full flex flex-col rounded-none items-center justify-center p-6"
        >
    <ModalContent>
            <FAQAccordion/>
    </ModalContent>
        </CButton>
    </ModalBody>
</Modal>
  )
}

export default FAQModal
