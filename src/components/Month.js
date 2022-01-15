import React from 'react'
import { DateTime } from 'luxon';


export default function Month() {
    return (
        <div>
            {DateTime.local().monthLong}
        </div>
    )
}

// just renders the current month