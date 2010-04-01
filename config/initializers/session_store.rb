# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_twitmovies_session',
  :secret      => '5ef00d4f7e3b0cd5d68abcdf1c48330c32a3b669a63dd86d24b27a1052de6342e780f424771e86526690cc25dae3c8f06a112a24cae0b6881bb7d02056d44c99'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
