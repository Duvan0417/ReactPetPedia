import React from 'react';
import { Bell, Search, Plus, TrendingUp, Users, Calendar, BarChart3 } from 'lucide-react';
import "./Veterinaria.css";

const Veterinaria = () => {
  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Plus size={20} />
              <span>Nuevo</span>
            </button>
            <button className="relative p-2 text-gray-600 hover:text-gray-800">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Usuarios</p>
                <p className="text-2xl font-bold text-gray-800">12,345</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="text-blue-600" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="text-green-500 mr-1" size={16} />
              <span className="text-green-500">+12%</span>
              <span className="text-gray-500 ml-2">vs mes anterior</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Ingresos</p>
                <p className="text-2xl font-bold text-gray-800">$45,231</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <BarChart3 className="text-green-600" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="text-green-500 mr-1" size={16} />
              <span className="text-green-500">+8%</span>
              <span className="text-gray-500 ml-2">vs mes anterior</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Proyectos</p>
                <p className="text-2xl font-bold text-gray-800">56</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Calendar className="text-purple-600" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="text-green-500 mr-1" size={16} />
              <span className="text-green-500">+3%</span>
              <span className="text-gray-500 ml-2">vs mes anterior</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Tareas</p>
                <p className="text-2xl font-bold text-gray-800">234</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <BarChart3 className="text-orange-600" size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="text-green-500 mr-1" size={16} />
              <span className="text-green-500">+15%</span>
              <span className="text-gray-500 ml-2">vs mes anterior</span>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Actividad Reciente</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="text-blue-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">
                      Nuevo usuario registrado
                    </p>
                    <p className="text-xs text-gray-500">Hace 2 horas</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Acciones Rápidas</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <Plus className="text-blue-600" size={20} />
                  <span className="text-sm font-medium">Crear Proyecto</span>
                </div>
              </button>
              <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <Users className="text-green-600" size={20} />
                  <span className="text-sm font-medium">Invitar Usuario</span>
                </div>
              </button>
              <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="text-purple-600" size={20} />
                  <span className="text-sm font-medium">Ver Reportes</span>
                </div>
              </button>
              <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-orange-600" size={20} />
                  <span className="text-sm font-medium">Programar Reunión</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Veterinaria;