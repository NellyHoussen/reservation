function Connexion() {
  return (
    // Arrière-plan chaleureux teinté sable/crème
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50/40 px-4">
      
      {/* Carte principale avec une bordure douce et chaleureuse */}
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md shadow-amber-900/5 border border-amber-100/50 flex flex-col gap-6">
        
        {/* En-tête accueillant style "Carnet de voyage" */}
        <div className="text-center space-y-1.5">
          <h1 className="text-3xl font-extrabold tracking-tight text-amber-950">
            Prêt pour l'aventure ?
          </h1>
          <p className="text-sm text-amber-800/70 font-medium">
            Connectez-vous pour explorer votre espace voyage.
          </p>
        </div>

        <form className="flex flex-col gap-5">
          {/* Champ Identifiant */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-amber-950/80">
              Identifiant
            </label>
            <input 
              id="email"
              type="text"
              placeholder="Votre identifiant ou email"
              className="w-full text-base border border-amber-200/60 rounded-xl px-4 py-3 bg-amber-50/20 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all duration-200 placeholder-amber-700/30 text-amber-950"
            />
          </div>

          {/* Champ Mot de passe */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-semibold text-amber-950/80">
              Mot de passe
            </label>
            <input 
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full text-base border border-amber-200/60 rounded-xl px-4 py-3 bg-amber-50/20 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all duration-200 placeholder-amber-700/30 text-amber-950"
            />
          </div>

          {/* Bouton d'action "Terre Cuite" vibrant et attractif */}
          <button 
            type="submit"
            className="w-full mt-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 active:scale-[0.98] text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-orange-500/20 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 text-base cursor-pointer"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}

export default Connexion;