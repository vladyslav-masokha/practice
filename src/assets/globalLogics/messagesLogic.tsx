import React from 'react'
import styles from '../ui/Form/Form.module.scss'
import { MessageLogicProps } from './props/MessageLogicProps.ts'

const MessagesLogic: React.FC<MessageLogicProps> = ({ successMessage, errorMessage, }) => {
	const logicStyles = () =>
		errorMessage ? styles.errorMessage : successMessage
		? styles.successMessage : ''

	const logicMessage = () =>
		errorMessage ? errorMessage : successMessage ? successMessage : ''

	console.log(logicMessage())

	return <div className={logicStyles()}>{logicMessage()}</div>
}

export { MessagesLogic }
