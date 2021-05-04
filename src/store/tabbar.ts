import { useState } from 'react'
import { createModel } from 'hox'

export const useSelectedTab = createModel(() => useState(''))
export const useTabHidden = createModel(() => useState(false))
