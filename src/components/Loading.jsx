import '../styles/index.css';

const Loading = () => (
    <>
        <div className="loading-container">
            <div className="progress mb-3">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}></div>
            </div>
            <div>
                Tunggu Sebentar ya...
            </div>
        </div>
    </>
)

export default Loading;