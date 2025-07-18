export default function Input(props) {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            className="p-2 rounded-md border-1 border-(--fourthColor) text-center bg-(--firstColor)">
        </input>
    )
}