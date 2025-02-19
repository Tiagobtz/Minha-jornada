type Props = {
    label: string
    onClick: () => void
}

export const BotaoCustomizavel = ({label, onClick}: Props) => {
    return(
        <button className="border-blue-700 bg-blue-700 p-3 text-white rounded-md hover:bg-blue-500 mr-3" onClick={onClick}>{label}</button>
    )
}