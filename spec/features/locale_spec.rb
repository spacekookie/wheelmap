require 'rails_helper'

describe "Locale feature" do
  before do
    languages = "de;en;es;fr;it;is"
    supported_languages = languages.split(';')
    I18n.available_locales = supported_languages
  end

  describe "wheelmap in preferred language" do
    before do
      Capybara.current_session.driver.header("Accept-Language", languages)
    end

    describe "Show wheelmap in preferred language" do
      let(:languages)  { "de-DE;de;en" }

      it "has locale de" do
        visit root_path
        expect(I18n.locale).to eq :de
      end
    end
  end
end
