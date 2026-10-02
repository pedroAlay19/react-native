export type EstadoSolicitud = 'en_espera' | 'aceptado' | 'rechazado';

export interface Solicitud {
    id: string;
    universidad: string;
    carrera: string;
    estado: EstadoSolicitud;
    fecha: string;
}

export const solicitudes: Solicitud[] = [
    {
        id: '1',
        universidad: 'Universidad Laica Eloy Alfaro de Manabí',
        carrera: 'Ingeniería de Software',
        estado: 'en_espera',
        fecha: '2026-09-28',
    },
    {
        id: '2',
        universidad: 'Universidad Técnica de Manabí',
        carrera: 'Ingeniería en Sistemas',
        estado: 'aceptado',
        fecha: '2026-09-25',
    },
    {
        id: '3',
        universidad: 'Escuela Politécnica Nacional',
        carrera: 'Ingeniería de Software',
        estado: 'rechazado',
        fecha: '2026-09-22',
    },
    {
        id: '4',
        universidad: 'Universidad de Guayaquil',
        carrera: 'Ingeniería en Computación',
        estado: 'en_espera',
        fecha: '2026-09-30',
    },
    {
        id: '5',
        universidad: 'Escuela Superior Politécnica del Litoral',
        carrera: 'Computación',
        estado: 'aceptado',
        fecha: '2026-09-18',
    },
    {
        id: '6',
        universidad: 'Universidad de Cuenca',
        carrera: 'Ingeniería de Software',
        estado: 'en_espera',
        fecha: '2026-09-27',
    },
    {
        id: '7',
        universidad: 'Universidad San Francisco de Quito',
        carrera: 'Computer Science',
        estado: 'rechazado',
        fecha: '2026-09-15',
    },
    {
        id: '8',
        universidad: 'Universidad de las Américas',
        carrera: 'Ingeniería de Software',
        estado: 'aceptado',
        fecha: '2026-09-20',
    },
    {
        id: '9',
        universidad: 'Universidad Técnica Particular de Loja',
        carrera: 'Tecnologías de la Información',
        estado: 'en_espera',
        fecha: '2026-09-29',
    },
    {
        id: '10',
        universidad: 'Universidad Estatal del Sur de Manabí',
        carrera: 'Ingeniería en Tecnologías de la Información',
        estado: 'aceptado',
        fecha: '2026-09-17',
    },
    {
        id: '11',
        universidad: 'Universidad Central del Ecuador',
        carrera: 'Ingeniería Civil',
        estado: 'rechazado',
        fecha: '2026-09-12',
    },
    {
        id: '12',
        universidad: 'Universidad Politécnica Salesiana',
        carrera: 'Ingeniería de Software',
        estado: 'en_espera',
        fecha: '2026-09-26',
    },
    {
        id: '13',
        universidad: 'Universidad Técnica de Ambato',
        carrera: 'Ingeniería Industrial',
        estado: 'aceptado',
        fecha: '2026-09-19',
    },
    {
        id: '14',
        universidad: 'Universidad Nacional de Loja',
        carrera: 'Derecho',
        estado: 'en_espera',
        fecha: '2026-09-24',
    },
    {
        id: '15',
        universidad: 'Universidad Católica de Cuenca',
        carrera: 'Medicina',
        estado: 'rechazado',
        fecha: '2026-09-10',
    },
];