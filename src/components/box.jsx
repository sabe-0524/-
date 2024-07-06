export default function Box({value, onChange}) {
    return (
        <div>
            <input type="text" placeholder="Enter answer here" value={value} onChange={onChange} />
        </div>
    )
}

