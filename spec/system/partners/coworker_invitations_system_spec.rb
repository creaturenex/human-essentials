RSpec.describe "Coworking invitations", type: :system, js: true, skip_seed: true do
  describe 'inviting a new user as a partner user' do
    let(:partner_user) { partner.primary_partner_user }
    let!(:partner) { FactoryBot.create(:partner) }

    context 'GIVEN a partner user complete the process to invite a coworker' do
      let(:new_user_name) { Faker::Name.first_name }
      let(:new_user_email) { Faker::Internet.email }

      before do
        login_as(partner_user, scope: :partner_user)
        visit partner_user_root_path

        click_on partner_user.email
        click_on 'My Co-Workers'

        click_on 'Invite new user'

        fill_in 'Name', with: new_user_name
        fill_in 'Email', with: new_user_email

        click_on 'Create User'

        assert page.has_content? "You have invited #{new_user_name} to join your organization!"
      end

      it 'should create a new partner user for the partner account' do
        expect(Partners::User.find_by(email: new_user_email, partner: partner_user.partner)).not_to eq(nil)
      end
    end
  end
end

