import React from 'react';

const Usuario = () => {
    // Lista de datos que se mostrarán en las cartas
    const tareas = [
        { nombre: 'Implementar autenticación', descripcion: 'Agregar autenticación de usuarios', prioridad: 'Baja', estado: 'En progreso' },
        { nombre: 'Crear base de datos', descripcion: 'Configurar MongoDB para el proyecto', prioridad: 'Media', estado: 'Pendiente' },
        { nombre: 'Diseñar interfaz', descripcion: 'Crear una UI amigable para el usuario', prioridad: 'Alta', estado: 'Completada' },
    ];

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold my-4">Lista de tareas</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tareas.map((usuario, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-semibold">{usuario.nombre}</h2>
                        <p className="text-gray-600">{usuario.descripcion}</p>
                        <span
                            className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full 
                ${usuario.prioridad === 'Alta' ? 'bg-green-500 text-white' : ''}
                ${usuario.prioridad === 'Media' ? 'bg-yellow-500 text-white' : ''}
                ${usuario.prioridad === 'Baja' ? 'bg-red-500 text-white' : ''}
              `}
                        >
                            {usuario.prioridad}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Usuario;
