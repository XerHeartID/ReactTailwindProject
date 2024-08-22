function Button({btnClick, text}) {
    return <button className="py-2 px-4 rounded bg-blue-500 text-white w-44" onClick={btnClick}>{text}</button>
}

export default Button;