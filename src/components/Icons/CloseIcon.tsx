import type {FC} from "react"

const CloseIcon: FC = props => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="close"
            viewBox="0 0 24 24"
            width="24"
            fill="none"
            stroke="currentColor"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    )
}

export default CloseIcon
