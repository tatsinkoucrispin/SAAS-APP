import { AccordionContent } from '@/components/ui/accordion'
import { ConnectionProviderProps } from '@/providers/connections-provider'
import { EditorState } from '@/providers/editor-provider'
import { nodeMapper } from '@/lib/types'
import React, { useEffect } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

export interface Option {
    value: string
    label: string
    disable?: boolean
    /** fixed option that can't be removed. */
    fixed?: boolean
    /** Group the options by providing key. */
    [key: string]: string | boolean | undefined
  }
  interface GroupOption {
    [key: string]: Option[]
  }
  
type Props = {
    nodeConnection: ConnectionProviderProps
    newState: EditorState
    file: any
    setFile: (file: any) => void
    selectedSlackChannels: Option[]
    setSelectedSlackChannels: (value: Option[]) => void
}

function ContentBasedOnTitle({}: Props) {
  return (
    <div>ContentBasedOnTitle</div>
  )
}

export default ContentBasedOnTitle