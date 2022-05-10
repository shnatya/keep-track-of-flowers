class User < ApplicationRecord
    has_secure_password
    has_many :flowers

    validates :username, presence: :true, uniqueness: true, length: {minimum: 3}
end
