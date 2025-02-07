import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
    React.useEffect(() => {
        // Añade la clase cuando el componente se monta
        document.body.classList.add('loading-active');
        
        // Remueve la clase cuando el componente se desmonta
        return () => {
            document.body.classList.remove('loading-active');
        };
    }, []);

    return (
        <>
            {[1, 2, 3].map(index => (
                <div key={index} className="LoadingTodo-container">
                    <span className="LoadingTodo-completeIcon"></span>
                    
                    <div className="LoadingTodo-text">
                        <div className="LoadingTodo-firstLine"></div>
                        <div className="LoadingTodo-secondLine"></div>
                    </div>
                    
                    <span className="LoadingTodo-deleteIcon"></span>
                </div>
            ))}
        </>
    );
}

export { TodosLoading };
 