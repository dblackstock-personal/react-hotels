import React from 'react'
import { tsPropertySignature } from '@babel/types'

export default function Comment(props) {
    return (
        <div>
            {props.comment}
        </div>
    )
}
