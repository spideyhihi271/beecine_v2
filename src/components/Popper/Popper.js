import './Popper.scss';

function Popper({ children, show }) {
    return (
        <div className="popper-wrapper">
            <div className="popper-shown">{show}</div>
            <div className="popper-content">{children}</div>
        </div>
    );
}

export default Popper;
